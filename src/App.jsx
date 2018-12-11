import React, { Fragment, Suspense } from 'react'
import useFetch from 'fetch-suspense'
import { HoverContext } from './context/form'
import pose from 'react-pose'

const Hoverh1 = pose.h1({
    hoverable: true,
    idle: { scale: 1 },
    hover: { scale: 1.1 },
})
const Bounce = pose.span({
    hoverable: true,
    enter: { opacity: 0.25, scale: 1 },
    exit: { opacity: 1 },
})
const HoverButton = pose.button({
    hoverable: true,
    idle: { scale: 1 },
    hover: { scale: 1.1 },
})

const FetchCompenent = () => {
    const response = JSON.parse(
        useFetch('https://jsonplaceholder.typicode.com/posts')
    )
    const { setId } = React.useContext(HoverContext)

    return response.map((response, i) =>
        React.useMemo(
            () => (
                <Fragment key={i}>
                    <Hoverh1
                        id={response.id}
                        pose={'idle'}
                        onMouseEnter={() => setId(response.id)}
                    >
                        {response.body}
                    </Hoverh1>

                    <br />
                </Fragment>
            ),
            [response.id]
        )
    )
}

const AsyncComponent = React.memo(() => {
    const [render, setRender] = React.useState(false)

    return (
        <Fragment>
            <HoverButton pose={'idle'} onClick={e => setRender(!render)}>
                Clickme
            </HoverButton>
            {render && (
                <Suspense fallback={<div>loading</div>}>
                    <FetchCompenent />
                </Suspense>
            )}
        </Fragment>
    )
})

const ShowHoverComponent = () => {
    const { id } = React.useContext(HoverContext)
    return (
        <Fragment>
            ID: <Bounce pose={'idle'}>{id}</Bounce>
        </Fragment>
    )
}

const App = React.memo(() => {
    return (
        <Fragment>
            <ShowHoverComponent />
            <AsyncComponent />
        </Fragment>
    )
})

export default App
