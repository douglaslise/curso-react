import React from "react"
import {shallow} from "enzyme"
import SingleComment from "./SingleComment"

it("should toggle visibility on button click", () => {
  const component = shallow(<SingleComment user="abc" body="def" />)
  const user = component.find(".comment_user")
  expect(user.text()).toBe("abc")
  const button = component.find("button")
  button.simulate("click")
  expect(component.find(".comment_user")).toHaveLength(0)
})
