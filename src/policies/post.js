
const ApplicationPolicy = require("./application");

module.exports = class PostPolicy extends ApplicationPolicy {
  edit() {
    return this._isOwner();
    return this._isAdmin();
  }
  update() {
    return this.edit();
  }
  destroy() {
    return this.update();
  }
}
