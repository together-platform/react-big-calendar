'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

exports.__esModule = true
exports.default = void 0

var _extends3 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends')
)

var _classnames = _interopRequireDefault(require('classnames'))

var _react = _interopRequireDefault(require('react'))

/* eslint-disable react/prop-types */
function TimeGridBackgroundEvent(props) {
  var _extends2

  var style = props.style,
    className = props.className,
    event = props.event,
    accessors = props.accessors,
    isRtl = props.isRtl,
    selected = props.selected,
    label = props.label,
    continuesEarlier = props.continuesEarlier,
    continuesLater = props.continuesLater,
    getters = props.getters,
    onClick = props.onClick,
    onDoubleClick = props.onDoubleClick,
    BackgroundEventWrapper = props.components.backgroundEventWrapper
  var tooltip = accessors.tooltip(event)
  var end = accessors.end(event)
  var start = accessors.start(event)
  var userProps = getters.backgroundEventProp(event, start, end, selected)
  var height = style.height,
    top = style.top,
    width = style.width,
    xOffset = style.xOffset
  return _react.default.createElement(
    BackgroundEventWrapper,
    (0, _extends3.default)(
      {
        type: 'time',
      },
      props
    ),
    _react.default.createElement('div', {
      onClick: onClick,
      onDoubleClick: onDoubleClick,
      style: (0, _extends3.default)(
        {},
        userProps.style,
        ((_extends2 = {
          top: top + '%',
          height: height + '%',
        }),
        (_extends2[isRtl ? 'right' : 'left'] = Math.max(0, xOffset) + '%'),
        (_extends2.width = 'calc(' + width + '% + 10px)'),
        _extends2)
      ),
      title: tooltip
        ? (typeof label === 'string' ? label + ': ' : '') + tooltip
        : undefined,
      className: (0, _classnames.default)(
        'rbc-event',
        'rbc-background-event',
        className,
        userProps.className,
        {
          'rbc-selected': selected,
          'rbc-event-continues-earlier': continuesEarlier,
          'rbc-event-continues-later': continuesLater,
        }
      ),
    })
  )
}

var _default = TimeGridBackgroundEvent
exports.default = _default
module.exports = exports['default']
