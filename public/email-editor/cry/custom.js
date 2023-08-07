// eslint-disable-next-line no-undef
unlayer.registerTool({
  name: 'my_cry_tool',
  label: 'My CRY XYZ',
  icon: 'fa-bomb',
  supportedDisplayModes: ['web', 'email'],
  options: {},
  values: {},
  renderer: {
    // eslint-disable-next-line no-undef
    Viewer: unlayer.createViewer({
      render(values) {
        return '<div>I am a smile tool.</div>';
      },
    }),
    exporters: {
      web: function (values) {
        return '<div>I am a smile tool.</div>';
      },
      email: function (values) {
        return '<div>I am a smile tool.</div>';
      },
    },
    head: {
      css: function (values) {},
      js: function (values) {},
    },
  },
});