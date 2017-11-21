require 'slim'
require 'coffee-script'
require 'middleman-core/renderers/redcarpet'
require 'sprockets/es6'

class StatesmanMarkdown < Middleman::Renderers::MiddlemanRedcarpetHTML
  def preprocess(document)
    document = statesman_link(document)
    return (document)
  end
  def statesman_link(document)
    document.gsub(/\{(.*)\}\((.*),(.*)\)/) do
      block = "<a data-link-root=\"#{$2}\" data-link-target=\"#{$3}\">#{$1}</a>"
      block
    end
  end
end


activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

activate :sprockets do |s|
  s.supported_output_extensions << '.es6'
end

set :markdown_engine, :redcarpet
# set :markdown, :highlight => true
set :markdown,  :no_intra_emphasis  => true,
                :tables             => true,
                :fenced_code_blocks => true,
                :autolink           => true,
                :lax_spacing        => true,
                :highlight          => true,
                :renderer           => StatesmanMarkdown

set :layout, false
page "html/project/*", :layout => "project"
#page "/html/page/design", :layout => "design"

set :js_dir, 'js'
set :css_dir, 'css'
set :images_dir, 'img'

configure :development do
   activate :livereload, livereload_css_target: 'css/main.css'
end

configure :build do
  activate :minify_css
  activate :minify_javascript
end
