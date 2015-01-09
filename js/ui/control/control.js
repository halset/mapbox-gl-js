'use strict';

module.exports = Control;

function Control() {}

Control.prototype = {
	addTo(map) {
		debugger;
		this._map = map;
		this._container = this.onAdd(map);
		if (!this.attrib) this._container.className += ' mapboxgl-ctrl-' + (this.opts && this.opts.position || 'topright');
		return this;
	},

	remove() {
		this._container.parentNode.removeChild(this._container);
		if (this.onRemove) this.onRemove(this._map);
		this._map = null;
		return this;
	}
};
