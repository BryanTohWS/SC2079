/**
 * MDP API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Direction from './Direction';
import PathfindingPoint from './PathfindingPoint';

/**
 * The PathfindingRequestRobot model module.
 * @module model/PathfindingRequestRobot
 * @version 1.0.0
 */
class PathfindingRequestRobot {
    /**
     * Constructs a new <code>PathfindingRequestRobot</code>.
     * @alias module:model/PathfindingRequestRobot
     * @param direction {module:model/Direction} The direction of the robot.
     * @param northEast {module:model/PathfindingPoint} The north-east corner of the robot.
     * @param southWest {module:model/PathfindingPoint} The south-west corner of the robot.
     */
    constructor(direction, northEast, southWest) { 
        
        PathfindingRequestRobot.initialize(this, direction, northEast, southWest);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, direction, northEast, southWest) { 
        obj['direction'] = direction;
        obj['north_east'] = northEast;
        obj['south_west'] = southWest;
    }

    /**
     * Constructs a <code>PathfindingRequestRobot</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PathfindingRequestRobot} obj Optional instance to populate.
     * @return {module:model/PathfindingRequestRobot} The populated <code>PathfindingRequestRobot</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PathfindingRequestRobot();

            if (data.hasOwnProperty('direction')) {
                obj['direction'] = ApiClient.convertToType(data['direction'], Direction);
            }
            if (data.hasOwnProperty('north_east')) {
                obj['north_east'] = ApiClient.convertToType(data['north_east'], PathfindingPoint);
            }
            if (data.hasOwnProperty('south_west')) {
                obj['south_west'] = ApiClient.convertToType(data['south_west'], PathfindingPoint);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PathfindingRequestRobot</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PathfindingRequestRobot</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PathfindingRequestRobot.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `north_east`
        if (data['north_east']) { // data not null
          PathfindingPoint.validateJSON(data['north_east']);
        }
        // validate the optional field `south_west`
        if (data['south_west']) { // data not null
          PathfindingPoint.validateJSON(data['south_west']);
        }

        return true;
    }


}

PathfindingRequestRobot.RequiredProperties = ["direction", "north_east", "south_west"];

/**
 * The direction of the robot.
 * @member {module:model/Direction} direction
 */
PathfindingRequestRobot.prototype['direction'] = undefined;

/**
 * The north-east corner of the robot.
 * @member {module:model/PathfindingPoint} north_east
 */
PathfindingRequestRobot.prototype['north_east'] = undefined;

/**
 * The south-west corner of the robot.
 * @member {module:model/PathfindingPoint} south_west
 */
PathfindingRequestRobot.prototype['south_west'] = undefined;






export default PathfindingRequestRobot;

