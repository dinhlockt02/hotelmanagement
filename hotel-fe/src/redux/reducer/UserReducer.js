const initialState = {
    userLogin: {
        id: "1",
        username: "admin",
        password: "1",
        fullName: "Nguyễn Đình Nhật Quang",
        avatar: "https://i.pravatar.cc/300",
        role: "Super Project Admin"
    }
}

export const UserReducer = (state = initialState, action) => {
  switch (action.type) {

  default:
    return {...state};
  }
}
