/**
 * Reseplaneraren
 * Provides access to Västtrafik journey planner
 *
 * OpenAPI spec version: 1.10.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Vehicle'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Vehicle'));
  } else {
    // Browser globals (root is window)
    if (!root.Reseplaneraren) {
      root.Reseplaneraren = {};
    }
    root.Reseplaneraren.LiveMap = factory(root.Reseplaneraren.ApiClient, root.Reseplaneraren.Vehicle);
  }
}(this, function(ApiClient, Vehicle) {
  'use strict';




  /**
   * The LiveMap model module.
   * @module model/LiveMap
   * @version 1.10.1
   */

  /**
   * Constructs a new <code>LiveMap</code>.
   * @alias module:model/LiveMap
   * @class
   * @param time {Date} Current server time
   * @param maxx {Number} Right border (longitude) of the bounding box in WGS84 * 1000000
   * @param maxy {Number} Upper border (latitude) of the bounding box in WGS84 * 1000000
   * @param vehicles {Array.<module:model/Vehicle>} 
   * @param minx {Number} Left border (longitude) of the bounding box in WGS84 * 1000000
   * @param miny {Number} Lower border (latitude) of the bounding box in WGS84 * 1000000
   */
  var exports = function(time, maxx, maxy, vehicles, minx, miny) {
    var _this = this;

    _this['time'] = time;
    _this['maxx'] = maxx;
    _this['maxy'] = maxy;
    _this['vehicles'] = vehicles;
    _this['minx'] = minx;
    _this['miny'] = miny;
  };

  /**
   * Constructs a <code>LiveMap</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LiveMap} obj Optional instance to populate.
   * @return {module:model/LiveMap} The populated <code>LiveMap</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('time')) {
        obj['time'] = ApiClient.convertToType(data['time'], 'Date');
      }
      if (data.hasOwnProperty('maxx')) {
        obj['maxx'] = ApiClient.convertToType(data['maxx'], 'Number');
      }
      if (data.hasOwnProperty('maxy')) {
        obj['maxy'] = ApiClient.convertToType(data['maxy'], 'Number');
      }
      if (data.hasOwnProperty('vehicles')) {
        obj['vehicles'] = ApiClient.convertToType(data['vehicles'], [Vehicle]);
      }
      if (data.hasOwnProperty('minx')) {
        obj['minx'] = ApiClient.convertToType(data['minx'], 'Number');
      }
      if (data.hasOwnProperty('miny')) {
        obj['miny'] = ApiClient.convertToType(data['miny'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Current server time
   * @member {Date} time
   */
  exports.prototype['time'] = undefined;
  /**
   * Right border (longitude) of the bounding box in WGS84 * 1000000
   * @member {Number} maxx
   */
  exports.prototype['maxx'] = undefined;
  /**
   * Upper border (latitude) of the bounding box in WGS84 * 1000000
   * @member {Number} maxy
   */
  exports.prototype['maxy'] = undefined;
  /**
   * @member {Array.<module:model/Vehicle>} vehicles
   */
  exports.prototype['vehicles'] = undefined;
  /**
   * Left border (longitude) of the bounding box in WGS84 * 1000000
   * @member {Number} minx
   */
  exports.prototype['minx'] = undefined;
  /**
   * Lower border (latitude) of the bounding box in WGS84 * 1000000
   * @member {Number} miny
   */
  exports.prototype['miny'] = undefined;



  return exports;
}));


