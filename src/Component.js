'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MyComponent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactWebsocketFlux = require('react-websocket-flux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyComponent = exports.MyComponent = function (_Component) {
    _inherits(MyComponent, _Component);

    function MyComponent(props, context) {
        _classCallCheck(this, MyComponent);

        // 初始化 this.state
        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MyComponent).call(this, props, context));

        _this.state = {
            temperature: -1
        };

        // WebSocket 的 'onMessage' callback
        _this.onMessage = _this.onMessage.bind(_this);

        // 連線到 WebSocket Server
        _reactWebsocketFlux.WebsocketActions.connect(_this.props.server);
        return _this;
    }

    _createClass(MyComponent, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            // 將 'onMessage' 註冊到 Flux 的 Store
            _reactWebsocketFlux.WebsocketStore.addMessageListener(this.onMessage);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            // 將 'onMessage' 從 Flux 的 Store 解除註冊       
            _reactWebsocketFlux.WebsocketStore.removeMessageListener(this.onMessage);
        }
    }, {
        key: 'onMessage',
        value: function onMessage(data) {
            // Deserialize
            this.setState({
                temperature: data.temperature
            });
            console.log(data);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement("div", null, _react2.default.createElement("h1", null, this.state.temperature));
        }
    }]);

    return MyComponent;
}(_react.Component);
//# sourceMappingURL=Component.js.map
