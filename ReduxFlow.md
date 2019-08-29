Redux Data Flow:

1. Button clicked
2. Dispatch action
3. Action dispatch trigger reducer function
4. Reducer function take preState and action return new state
5. State changes trigger mapStateToProps function
6. mapStateToProps function will map new redux state to props
7. Props change trigger render and you can see change on browser
