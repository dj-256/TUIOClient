/**
 * @author Christian Brel <ch.brel@gmail.com>
 */

import TUIOObject from './TUIOObject';

import { TAG_SOCKETIO_TYPE } from './constants';

/**
 * Main class to manage TUIOTag.
 *
 * @class TUIOTag
 * @extends TUIOObject
 */
class TUIOTag extends TUIOObject {

  /**
   * TUIOTag constructor.
   *
   * @constructor
   * @param {string/number} id - TUIOTag's id.
   * @param {string/number} x - TUIOTag's abscissa.
   * @param {string/number} y - TUIOTag's ordinate.
   */
  constructor(id, tagId, x, y, angle) {
    super(id, x, y);
    this._tagId = tagId;
    this._angle = angle;
  }

  /**
   * Give the TUIOTag's JSON representation.
   *
   * @method toJSON
   */
  toJSON() {
    const objJSON = super.toJSON();
    return {
      ...objJSON,
      type: TAG_SOCKETIO_TYPE,
      tagId: this._tagId,
      angle: this._angle,
    };
  }
}

export default TUIOTag;
