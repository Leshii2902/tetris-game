'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Zigzag1 = function (_Figure) {
        _inherits(Zigzag1, _Figure);

        function Zigzag1() {
                _classCallCheck(this, Zigzag1);

                var _this = _possibleConstructorReturn(this, (Zigzag1.__proto__ || Object.getPrototypeOf(Zigzag1)).call(this));

                _this.position1 = [{ '-1': 1, '0': 1, '1': 0 }, // положения фигуры для поворота
                { '-1': 0, '0': 1, '1': 1 }];

                _this.position2 = [{ '0': 0, '1': 1 }, { '0': 1, '1': 1 }, { '0': 1, '1': 0 }];

                _this.positions = [_this.position1, _this.position2]; // список положений фигуры

                _this.current = _this.positions[Math.floor(Math.random() * _this.positions.length)]; // выбор текущего положения

                return _this;
        }

        return Zigzag1;
}(Figure);