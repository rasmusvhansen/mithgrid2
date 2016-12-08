declare var m: any;

function generateTestData(num: number) {
  const numberOfLayers = 25;
  const data = [];
  for(let i = 0; i < num; i++) {
    data.push({
      name: 'Node ' + i,
      layers: generateLayers(numberOfLayers)
    })
  }
  return data;
}

function generateLayers(num: number) {
  const layers = [];
  for(let i = 0; i < num; i++) {
    layers.push({
      name: 'Layer ' + i,      
    })
  }
  return layers;
}

const data = generateTestData(50);

m.mount(document.getElementById('app'), {
  view: function () {
    return m('div', [
      m('table', { className: 'table table-striped latest-data' }, [
        m('thead', {}, 
          data.map(node => m('th', {}, node.name))),
        m('tbody',
          data.map(function (db) {
            return m('tr', { key: db.dbname }, [
              m('td', { className: 'dbname' }, db.dbname),
              m('td', { className: 'query-count' }, [
                m('span', { className: db.lastSample.countClassName }, db.lastSample.nbQueries)
              ]),
              db.lastSample.topFiveQueries.map(function (query) {
                return m('td', { className: query.elapsedClassName }, [
                  query.formatElapsed,
                  m('div', { className: 'popover left' }, [
                    m('div', { className: 'popover-content' }, query.query),
                    m('div', { className: 'arrow' })
                  ])
                ])
              })
            ])
          })
        )
      ])
    ])
  }
})