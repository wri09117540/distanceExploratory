Rickshaw.namespace("Rickshaw.Graph.RangeSliderY"),Rickshaw.Graph.RangeSliderY=Rickshaw.Class.create({initialize:function(i){var a=this.element=i.element,e=this.graph=i.graph;this.slideCallbacks=[],this.build(),e.onUpdate(function(){this.update()}.bind(this))},build:function(){var i=this.element,a=this.graph,e=a.max,n=a.min;"undefined"==typeof n&&(n=0);var s=this;$(function(){$(i).slider({range:!0,min:n,max:e,values:[n,e],slide:function(i,e){e.values[1]<=e.values[0]||(a.min=e.values[0],a.max=e.values[1],a.update(),s.slideCallbacks.forEach(function(i){i(a,a.window.xMin,a.window.xMax)}))}})})},update:function(){var i=this.element,a=this.graph,e=$(i).slider("option","values");$(i).slider("option","values",e)},onSlide:function(i){this.slideCallbacks.push(i)}});