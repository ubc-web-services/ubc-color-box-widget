CKEDITOR.dialog.add('color-box-widget', function (editor) {
  return {
    title: 'Color Box Widget',
    minWidth: 300,
    minHeight: 100,
    contents: [{
      id: 'info',
      elements: [
      {
        type: 'html',
        html: '<style>.cke_dialog_ui_input_select{ width: 100%; }</style>'
      },
        {
          id: 'align',
          type: 'select',
          label: 'Align',
          items: [
            ['Default', ''],
            ['Align center', 'align-center'],
            ['Align left', 'align-left'],
            ['Align right', 'align-right']
          ],
          setup: function (widget) {
            this.setValue(widget.data.align);
          },
          commit: function (widget) {
            widget.setData('align', this.getValue());
          }
        },
        {
          id: 'background',
          type: 'select',
          label: 'Background Color',
          items: [
            ['Default', ''],
            ['White', 'bg-white'],
            ['Light Grey', 'bg-grey-100'],
            ['Unit Primary Color', 'bg-unit-primary'],
            ['Unit Secondary Color', 'bg-unit-secondary'],
            ['Unit Tertiary Color', 'bg-unit-tertiary'],
            ['Unit Accent Color', 'bg-unit-accent'],
            ['UBC Blue', 'bg-ubc-blue bg-dark'],
            ['UBC Blue: Sea', 'bg-ubc-blue-sea bg-dark'],
            ['UBC Blue: Cobalt', 'bg-ubc-blue-cobalt bg-dark'],
            ['UBC Blue: Neptune', 'bg-ubc-blue-neptune bg-light'],
            ['UBC Blue: Cornflower', 'bg-ubc-blue-cornflower bg-light'],
            ['UBC Blue: Polar', 'bg-ubc-blue-polar bg-light'],
            ['UBC Blue: Frost', 'bg-ubc-blue-frost bg-light']
          ],
          setup: function (widget) {
            this.setValue(widget.data.background);
          },
          commit: function (widget) {
            widget.setData('background', this.getValue());
          }
        },
        {
          id: 'padding',
          type: 'select',
          label: 'Padding',
          items: [
            ['None', ''],
            ['Small', 'p-4'],
            ['Normal', 'p-6'],
            ['Large', 'p-12'],
            ['X Large', 'p-16']
          ],
          setup: function (widget) {
            this.setValue(widget.data.padding);
          },
          commit: function (widget) {
            widget.setData('padding', this.getValue());
          }
        },
        {
          id: 'margin',
          type: 'select',
          label: 'Vertical Margin',
          items: [
            ['None', ''],
            ['Small', 'my-4'],
            ['Normal', 'my-6'],
            ['Large', 'my-12'],
            ['X Large', 'my-16']
          ],
          setup: function (widget) {
            this.setValue(widget.data.margin);
          },
          commit: function (widget) {
            widget.setData('margin', this.getValue());
          }
        }
      ]
    }]
  };
});
