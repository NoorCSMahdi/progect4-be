const UserType = [
  { id: 1, UserType_name: "Admin" },
  { id: 2, UserType_name: "CompanyOwner" },
  { id: 3, UserType_name: "Engineer" },
  { id: 4, UserType_name: "User" },
];

module.exports = {
  getAll: function () {
    return UserType;
  }
};

