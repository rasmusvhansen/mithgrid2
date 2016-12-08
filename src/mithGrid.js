function generateTestData(num) {
    var numberOfLayers = 25;
    var data = [];
    for (var i = 0; i < num; i++) {
        data.push({
            name: 'Node ' + i,
            layers: generateLayers(numberOfLayers)
        });
    }
    return data;
}
function generateLayers(num) {
    var layers = [];
    for (var i = 0; i < num; i++) {
        layers.push({
            name: 'Layer ' + i,
        });
    }
    return layers;
}
var data = generateTestData(20);
m.mount(document.getElementById('grid'), {
    view: function () {
        var width = 100 / (data.length + 1);
        return m('div', { className: 'grid' }, [
            m('div', { className: 'grid-header clearfix' }, [
                m('div', { className: 'grid-header__cell', style: "width: " + width + "%" }, ' - ')
            ].concat(data.map(function (n) { return m('div', { className: 'grid-header__cell', style: "width: " + width + "%" }, n.name); }))),
            m('div', { className: 'grid-body' }, [
                data.map(function (n) { return m('div', { className: 'grid-group' }, [
                    m('div', { className: 'grid-group__header' })
                ].concat(n.layers.map(function (l) { return m('div', { className: 'grid-group__layer clearfix' }, [
                    m('div', { className: 'grid-group__layer-name', style: "width: " + width + "%" }, l.name)
                ].concat(data.map(function (n) { return m('div', { className: 'grid-group__cell', style: "width: " + width + "%" }, n.name); }))); }))); })
            ])
        ]);
    }
});
//# sourceMappingURL=mithGrid.js.map