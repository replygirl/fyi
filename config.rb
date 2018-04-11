set :layout, false
set :css_dir, 'css'
set :js_dir, 'js'
set :images_dir, 'images'

set :url_root, 'https://imogen.fyi'
activate :robots,
         rules: [{user_agent: '*', allow: %w[/]}],
         sitemap: "#{config[:url_root]}/sitemap.xml"
activate :search_engine_sitemap,
         default_priority: 0.5,
         default_change_frequency: 'monthly',
         process_url: -> (url) {url.sub('/templates', '').chomp('.html')},
         exclude_if: -> (page) {
           %w[200.html templates/about.html].include? page.normalized_path
         }

# With alternative layout
# page '/path/to/file.html', layout: 'other_layout'

# Proxy pages
# https://middlemanapp.com/advanced/dynamic-pages/

proxy '200.html', 'index.html'

# Helpers
# Methods defined in the helpers block are available in templates
# https://middlemanapp.com/basics/helper-methods/

helpers do
  def part(dir, locals = nil)
    locals ? partial("partials/#{dir}", locals) : partial("partials/#{dir}")
  end
end

configure :build do
  require 'uglifier'

  activate :minify_html
  activate :minify_css
  activate :minify_javascript, compressor: ::Uglifier.new(harmony: true)
  activate :imageoptim,
           pngout: false,
           svgo:   false,
           advpng:    { level: 3 },
           optipng:   { level: 4 },
           jpegoptim: { strip: %w[all], max_quality: 80 }

  activate :autoprefixer do |prefix|
    prefix.browsers = 'last 2 versions'
  end
end
