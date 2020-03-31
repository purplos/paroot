# paroot-react@0.1.1

> React integration for [paroot](https://github.com/purplos/paroot)

## Installation

Add paroot-react as a dependency in your react project

```bash
npm install --save paroot-react
```

Import the default exported component for all parts

```jsx
    import Paroot from 'paroot-react'

    return (
        <Paroot
            auth={auth}
            db={db}
            bgColor="#FFFFFF"
            textColor="#000000"
            primaryColor="#0000FF"
        />
    )
```

Or import any component you need

```jsx
    import { Votes, Roadmap, SuggestionForm } from 'paroot-react'

    return (
        <Votes
            auth={auth}
            db={db}
            bgColor="#FFFFFF"
            textColor="#000000"
            primaryColor="#0000FF"
        />

        <Roadmap
            auth={auth}
            db={db}
            bgColor="#FFFFFF"
            textColor="#000000"
            primaryColor="#0000FF"
        />

        <SuggestionForm
            auth={auth}
            db={db}
            bgColor="#FFFFFF"
            textColor="#000000"
            primaryColor="#0000FF"
        />
    )
```
