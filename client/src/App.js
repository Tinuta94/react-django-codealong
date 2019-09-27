import React from 'react';
import './App.css'


const issuePreview = (issue) => (
  <li>{issue.id} - {issue.description}</li>
)

const issueList = (issues) => (
  <ul>
    {issues.map(issuePreview)}</ul>
)

const userIssueList = (user) => (
  <div>
    {user.email}
    {issueList(user.issues)}
  </div>
)


const orderByCreatedOn = (issue1, issue2) => {
  let date1 = new Date(issue1.createdOn)
  let date2 = new Date(issue2.createdOn)
  return Math.sign(date2.getTime() - date1.getTime())
}

const recentIssues = (allIssues) => (
  issueList(allIssues.sort(orderByCreatedOn).slice(0, 5))
)


const newUserForm = () => (
  <form>
    <input type="text" name="username" value="" placeholder="Username" />
    <input type="text" name="email" value="" placeholder="Email" />
    <input type="submit" value="submit" />
  </form>
)

const newIssueForm = () => (
  <form>
    <input type="text" value="" placeholder="Description" />
    <input type="submit" value="New Issue" />
  </form>
)

const testUser =
  [
    {
      id: 1
      , email: "foo@foo.com"
      , username: "bob"
      , issues:
        [{ description: "a test issue 1", id: 1, createdOn: "2019-09-27T15:05:18.180058Z" }
          , { description: "a test issue 2", id: 2, createdOn: "2019-09-28T15:05:18.180058Z" }
          , { description: "a test issue 3", id: 3, createdOn: "2019-09-29T15:05:18.180058Z" }
        ]
    }
  ]
const issueDetails = (issue) => (
  <div>
    {issue.id} - {issue.description}
    <button>{issue.status ? "Close" : "Open"}</button>
  </div>
)
const userPreview = (user) => (
  <option value={user.id}>{user.username}</option>
)
const userList = (users) => (
  <select>
    {users.map(userPreview)}
  </select>
)

const App = () => (
  <div className="container">
    <aside className="sidebar">
      {newUserForm()}
      {newIssueForm()}
      {recentIssues(testUser[0].issues)}
    </aside>

    <article className="main">
      {userList(testUser)}
      {userIssueList(testUser[0])}
    </article>
  </div>
)


export default App;
