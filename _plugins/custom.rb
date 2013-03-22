# TODO: Once I build up some filters here, move them out to their own files
module Jekyll
  # Custom Tags
  class TitleTag < Liquid::Tag
    def initialize(tag_name, text, tokens)
      super
      @title = text
    end
    def render(context)
      if @title.empty?
        context.registers[:site].config['ruten']['default_title']
      else
        append = context.registers[:site].config['ruten']['title_append']
        "#{@title}#{append}"
      end
    end
  end
  # Custom Filters
  module RutenFilter
    def ruten_title(input)
      "#{input}"
    end
  end
end

Liquid::Template.register_tag('ruten_title', Jekyll::TitleTag)
Liquid::Template.register_filter(Jekyll::RutenFilter)
