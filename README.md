Deployed version -> https://flamboyant-galileo-4cf38e.netlify.app/

Explanations:

1. I used contextProvider to have opportunity unlarge our app simply. If it is final version i can rewrite it using just props.

2. to avoid additional recounts i used hooks useMemo. In this case it's useless, but if we unlarge our app it will allow us to avoid additional recounts when we render our component.



TASK 

1. Create a table-view of countries. The list should include the following data as a minimum (in any order):
● ISO code
● Country name
● Country flag
● Continent
2. The list of countries can be fetched through GraphQL from https://countries.trevorblades.com/ . When data is
being fetched, a loading indicator should appear.
3. It should be possible to sort and filter on all elements in the list. This part should take place on the client-side.
Tech Stack:
- React
- Create React App (https://reactjs.org/docs/create-a-new-react-app.html)
- AntDesign https://ant.design/docs/react/introduce
