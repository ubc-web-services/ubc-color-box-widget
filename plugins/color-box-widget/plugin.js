'use strict';
(function () {
  CKEDITOR.plugins.add('color-box-widget', {
    requires: 'widget',
    icons: 'color-box-widget',
    init: function (editor) {
      // Register the editing dialog.
      CKEDITOR.dialog.add('color-box-widget', this.path + 'dialogs/color-box-widget.js');
      editor.addContentsCss(this.path + 'css/color-box-widget.css');
      editor.ui.addButton('color-box-widget', {
        label: 'Insert a Color Box',
        icon: this.path + 'icons/color-box-widget.png',
        command: 'color-box-widget'
      });

      editor.widgets.add('color-box-widget', {
        template: '<div class="widget-color-box">' +
        '<div class="widget-content first-child--mt-0"><p>sample content</p></div>' +
        '</div>',
        allowedContent: 'div(!widget-color-box,align-*,p-*,my-*,bg-*);' +
        'div(!widget-content,!first-child--mt-0);',
        requiredContent: 'div(widget-color-box)',
        editables: {
          content: {
            selector: '.widget-content'
          },
        },

        button: 'Add a Color Box',
        dialog: 'color-box-widget',

        upcast: function (element) {
          return element.name == 'div' && element.hasClass('widget-color-box');
        },

        init: function () {
          if (this.element.hasClass('align-center'))
            this.setData('align', 'align-center');
          if (this.element.hasClass('align-left'))
            this.setData('align', 'align-left');
          if (this.element.hasClass('align-right'))
            this.setData('align', 'align-right');

          if (this.element.hasClass('p-4'))
            this.setData('padding', 'p-4');
          if (this.element.hasClass('p-6'))
            this.setData('padding', 'p-6');
          if (this.element.hasClass('p-12'))
            this.setData('padding', 'p-12');
          if (this.element.hasClass('p-16'))
            this.setData('padding', 'p-16');

          if (this.element.hasClass('my-4'))
            this.setData('margin', 'my-4');
          if (this.element.hasClass('my-6'))
            this.setData('margin', 'my-6');
          if (this.element.hasClass('my-12'))
            this.setData('margin', 'my-12');
          if (this.element.hasClass('my-16'))
            this.setData('margin', 'my-16');

          if (this.element.hasClass('bg-white'))
            this.setData('background', 'bg-white');
          if (this.element.hasClass('bg-grey-100'))
            this.setData('background', 'bg-grey-100');
          if (this.element.hasClass('bg-unit-primary'))
            this.setData('background', 'bg-unit-primary');
          if (this.element.hasClass('bg-unit-secondary'))
            this.setData('background', 'bg-unit-secondary');
          if (this.element.hasClass('bg-unit-tertiary'))
            this.setData('background', 'bg-unit-tertiary');
          if (this.element.hasClass('bg-unit-accent'))
            this.setData('background', 'bg-unit-accent');

          if (this.element.hasClass('bg-ubc-blue'))
            this.setData('background', 'bg-ubc-blue');
          if (this.element.hasClass('bg-ubc-blue-sea'))
            this.setData('background', 'bg-ubc-blue-sea');
          if (this.element.hasClass('bg-ubc-blue-cobalt'))
            this.setData('background', 'bg-ubc-blue-cobalt');
          if (this.element.hasClass('bg-ubc-blue-neptune'))
            this.setData('background', 'bg-ubc-blue-neptune');
          if (this.element.hasClass('bg-ubc-blue-cornflower'))
            this.setData('background', 'bg-ubc-blue-cornflower');
          if (this.element.hasClass('bg-ubc-blue-polar'))
            this.setData('background', 'bg-ubc-blue-polar');

        },

        data: function () {
          this.element.removeClass('align-center');
          this.element.removeClass('align-left');
          this.element.removeClass('align-right');

          this.element.removeClass('p-4');
          this.element.removeClass('p-6');
          this.element.removeClass('p-12');
          this.element.removeClass('p-16');

          this.element.removeClass('my-4');
          this.element.removeClass('my-6');
          this.element.removeClass('my-12');
          this.element.removeClass('my-16');

          this.element.removeClass('bg-white');
          this.element.removeClass('bg-grey-100');
          this.element.removeClass('bg-unit-primary');
          this.element.removeClass('bg-unit-secondary');
          this.element.removeClass('bg-unit-tertiary');
          this.element.removeClass('bg-unit-accent');
          this.element.removeClass('bg-ubc-blue');
          this.element.removeClass('bg-ubc-blue-sea');
          this.element.removeClass('bg-ubc-blue-cobalt');
          this.element.removeClass('bg-ubc-blue-neptune');
          this.element.removeClass('bg-ubc-blue-cornflower');
          this.element.removeClass('bg-ubc-blue-polar');

          if (this.data.align)
            this.element.addClass(this.data.align);

          if (this.data.padding)
            this.element.addClass(this.data.padding);

          if (this.data.margin)
            this.element.addClass(this.data.margin);

          if (this.data.background)
            this.element.addClass(this.data.background);

        }
      });
    }
  });
})(jQuery);
