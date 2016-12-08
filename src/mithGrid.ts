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

const data = generateTestData(20);

m.mount(document.getElementById('grid'), {
  view: function () {
    const width = 100 / (data.length + 1);
    return m('div', {className: 'grid'}, [
      m('div', {className: 'grid-header clearfix'}, [
        m('div', {className: 'grid-header__cell', style: `width: ${width}%`}, ' - '),
        ...data.map(n => m('div', {className: 'grid-header__cell', style: `width: ${width}%`}, n.name))
      ] 
        
      ),
      m('div', {className: 'grid-body'}, [
        data.map(n => m('div', {className: 'grid-group'}, [
          m('div', {className: 'grid-group__header'}),
          ...n.layers.map(l => m('div', {className: 'grid-group__layer clearfix'}, [
            m('div', {className: 'grid-group__layer-name', style: `width: ${width}%`}, l.name),
            ...data.map(n => m('div', {className: 'grid-group__cell', style: `width: ${width}%`}, n.name))
          ]))
        ]))
      ])
    ]);  
  }
});