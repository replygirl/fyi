class State {
  constructor(state_changes = { page:    null,
                                project: null,
                                contact: null },
              base_state = { page:    'design',
                             project: false,
                             contact: false }) {
    this.page = (state_changes.page != null) ?
                state_changes.page :
                base_state.page;
    this.project = (state_changes.project != null) ?
                   state_changes.project :
                   base_state.project;
    this.contact = (state_changes.contact != null) ?
                   state_changes.contact :
                   base_state.contact;
  }
  get params() {
    let params = { page:    this.page,
                   project: this.project,
                   contact: this.contact };
    if (params.project) { delete params.page }
    for (const [key, value] of Object.entries(params)) {
      if (!value) { delete params[key] }
    }
    return params;
  }
}
class StateControl {
  constructor(elements) {
    this.elements = elements;
    this.states = [];
    const params = this.constructor.getParams();
    this.states.unshift(new State({
      page:    params.page,
      project: params.project,
      contact: params.contact
    }));
    this.render(this.states[0]);
    // clicks
    document.body.addEventListener('click', event => {
      const link = event.target;
      if (link.hasAttribute("data-ref")) {
        const ref = link.getAttribute("data-ref").split('/');
        switch (ref[0]) {
          case "page":
            this.openPage(ref[1]);
            break;
          case "project":
            (ref[1] != "close") ? this.openProject(ref[1]) : this.closeProject();
            break;
          case "contact": switch (ref[1]) {
            case "open":
              this.openContact();
              break;
            case "close":
              this.closeContact();
              break;
            default: this.toggleContact();
          }
        }
      }
    });
    // history pops
    document.body.addEventListener('popstate', event => {
      const params = this.constructor.getParams();
      const base_state = this.states[0];
      this.states.shift();
      this.render(this.states[0], base_state);
    });
  }
  // gets
  get page()    { return this.states[0].page }
  get project() { return this.states[0].project }
  get contact() { return this.states[0].contact }
  get state()   { return this.states[0] }
  set state(state) { loadState(state) }
  // methods
  openPage(page) { if (page != this.page || this.project) {
    this.loadState({ page: page, project: false});
  }}
  openProject(project) { if (project != this.state.project) {
    this.loadState({ project: project });
  }}
  closeProject() { if (this.state.project) {
    this.loadState({ project: false });
  }}
  openContact() { if (!this.contact) {
    this.loadState({ contact: true });
  }}
  closeContact() { if (this.contact) {
    this.loadState({ contact: false });
  }}
  toggleContact() {
    this.loadState({ contact: !this.contact });
  }
  loadState(params) {
    const new_state = new State(params,
                                this.states[0]);
    this.constructor.pushHistory(new_state.params);
    this.states.unshift(new_state);
    this.render(new_state, this.states[1]);
  }
  render(state, base_state = { page:    null,
                               project: false,
                               contact: false }) {
    if (state.page != base_state.page) {
      if (state.project) { // render nav only
        this.constructor.loadContents(
          `html/${state.page}/header.html`,
          this.elements.nav.body
        );
      } else { // render page
        this.constructor.loadContents(
          `html/${state.page}/header.html`,
          this.elements.nav.body
        );
        this.constructor.loadContents(
          `html/${state.page}/index.html`,
          this.elements.main
        );
      }
    }
    if (state.project != base_state.project) {
      if (state.page == 'design') {
        if (state.project) { // render project
          this.constructor.loadContents(
            `html/design/project/${state.project}.html`,
            this.elements.main
          );
        } else { // render design index
          this.constructor.loadContents(
            'html/design/index.html',
            this.elements.main
          );
        }
      }
    }
    if (state.contact) {
      this.elements.contact.classList.add("active")
    } else {
      this.elements.contact.classList.remove("active")
    }
  }
  // utility
  static getParams(query_string = location.search) {
    let params = {};
    if (query_string) {
      const url_params = query_string.match(/\?([a-z=]+)/i).slice(1);
      for (let p of url_params) {
        p = p.split('=');
        switch (p.length) {
          case 1: params[p[0]] = true;
          case 2:
            params[p[0]] = p[1] === 'true' ? true :
                           p[1] === 'false' ? false :
                           p[1];
          default: continue;
        }
      }
    }
    return params;
  }
  static pushHistory(params) {
    let slug = "/?"
    let first = true;
    for (let [key, value] of Object.entries(params)) {
      if (first) { first = false } else { slug += '&' }
      slug += `${key}=${value}`;
    }
    history.pushState(null, null, slug);
  }
  static loadContents(url, target_element) {
    const http_request = new XMLHttpRequest();
    http_request.onreadystatechange = data => {
    //  console.log(data);
      target_element.innerHTML = http_request.responseText;
      //end loading state
      const scripts = target_element.getElementsByTagName('script')
      for (let script of scripts) {
        eval(script.innerHTML)
      }
    }
    http_request.open('GET', url);
    http_request.send();
    //start loading state
  }
}

const elements = {
  nav: {
    head:  document.querySelector("body > nav"),
    body:  document.querySelector("body > header")
  },
  main:    document.querySelector("body > main"),
  contact: document.querySelector("body > aside"),
}
const state_control = new StateControl(elements);
