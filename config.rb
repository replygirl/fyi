set :layout, false
set :css_dir, 'css'
set :js_dir, 'js'
set :images_dir, 'images'

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
  # activate :minify_javascript, compressor: Uglifier.new(harmony: true)
  activate :imageoptim,
           pngout: false,
           svgo:   false,
           advpng:    { level: 3 },
           optipng:   { level: 4 },
           jpegoptim: { strip: ['all'], max_quality: 85 }

  activate :autoprefixer do |prefix|
    prefix.browsers = 'last 2 versions'
  end
end
