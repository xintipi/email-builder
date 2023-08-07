const emptyTemplate = () => {
  return `
<div style="padding: 15px; border: 2px dashed #CCC; background-color: #EEE; color: #999; text-align: center;">
  TABLE
</div>`
}

const menuTemplate = (items) => {
  console.log(items)
  return `<div class="menu">
  <table><thead><tr>
      ${items.map((item) => {
        return `<th>
            ${item.heading}
          </th>`
      })}
      </tr></thead>
      <tbody><tr>
      ${items.map((item) => {
        return `<td>
            ${item.value}
          </td>`
      })}
      </tr><tbody>
    </div>`
}

const editorTemplate = (items) => {
  return `${items.map((item, index) => {
    return `<div class="menu-item" style="padding: 10px; margin: 10px 0; background-color: #FFF; border: 1px solid #CCC;">
    <div class="blockbuilder-widget-label">
      <label>Heading</label>
    </div>
    <input class="page-text form-control" data-index="${index}" type="text" value="${item.heading}" />

    <div class="blockbuilder-widget-label pt-2">
      <label>Value</label>
    </div>
    <input class="page-value form-control" data-index="${index}" type="text" value="${item.value}" />

    <a class="delete-btn" data-index="${index}" style="display: inline-block; cursor: pointer; color: red; margin-top: 10px; font-size: 12px;">
      Delete Item
    </a>
  </div>`
  })}
<div>
  <a class="add-btn" style="display: block; text-align: center; padding: 10px; background-color: #EEE; border: 1px solid #CCC; color: #999; cursor: pointer;">
    Add New Item
  </a>
</div>`
}

// eslint-disable-next-line no-undef
unlayer.registerPropertyEditor({
  name: 'menu_editor',
  layout: 'bottom',
  // eslint-disable-next-line no-undef
  Widget: unlayer.createWidget({
    render(value, updateValue, data) {
      return editorTemplate(value.items)
    },
    mount(node, value, updateValue, data) {
      const addButton = node.querySelector('.add-btn')
      addButton.onclick = function () {
        const newItems = value.items.slice(0)
        newItems.push({
          heading: 'Row' + (newItems.length + 1),
          value: 'key' + (newItems.length + 1),
        })
        updateValue({ items: newItems })
      }

      // Text Change
      // Look for inputs with class page-text and attach onchange event
      node.querySelectorAll('.page-text').forEach(function (item) {
        item.onchange = function (e) {
          // Get index of item being updated
          const itemIndex = e.target.dataset.index

          // Get the item and update its value
          const updatedItems = value.items.map(function (item, i) {
            if (i == itemIndex) {
              return {
                heading: e.target.value,
                value: item.value,
              }
            }

            return {
              heading: item.heading,
              value: item.value,
            }
          })

          updateValue({ items: updatedItems })
        }
      })

      // URL Change
      // Look for inputs with class page-value and attach onchange event
      node.querySelectorAll('.page-value').forEach(function (item) {
        item.onchange = function (e) {
          // Get index of item being updated
          const itemIndex = e.target.dataset.index

          // Get the item and update its value
          const updatedItems = value.items.map(function (item, i) {
            if (i == itemIndex) {
              return {
                heading: item.heading,
                value: e.target.value,
              }
            }

            return {
              heading: item.heading,
              value: item.value,
            }
          })

          updateValue({ items: updatedItems })
        }
      })

      // Delete
      node.querySelectorAll('.delete-btn').forEach(function (item) {
        item.onclick = function (e) {
          // Get index of item being deleted
          const itemIndex = e.target.dataset.index
          const updatedItems = value.items
            .map(function (item, i) {
              if (i == itemIndex) {
                return false
              }

              return {
                heading: item.heading,
                value: item.value,
              }
            })
            .filter(function (item) {
              return item
            })

          updateValue({ items: updatedItems })
        }
      })
    },
  }),
})

// eslint-disable-next-line no-undef
unlayer.registerTool({
  name: 'Table',
  label: 'Table',
  icon: 'fa-table',
  supportedDisplayModes: ['web', 'email'],
  options: {
    default: {
      title: null,
    },
    menu: {
      title: 'Table Contents',
      position: 1,
      options: {
        menu: {
          label: 'Table Contents',
          defaultValue: {
            items: [],
          },
          widget: 'menu_editor', // Custom Property Editor
        },
      },
    },
  },
  values: {},
  renderer: {
    // eslint-disable-next-line no-undef
    Viewer: unlayer.createViewer({
      render(values) {
        if (values.menu.items.length === 0) return emptyTemplate()

        return menuTemplate(values.menu.items)
      },
    }),
    exporters: {
      web: function (values) {
        return '<div>I am a custom tool.</div>'
      },
      email: function (values) {
        return '<div>I am a custom tool.</div>'
      },
    },
    head: {
      css: function (values) {},
      js: function (values) {},
    },
  },
})
