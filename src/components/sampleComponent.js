export const SampleComponent = (props) => {
    if(props.data != null)
        return(
            <div>
            <pre>{JSON.stringify(props.data, null, 2)}</pre>
            </div>
    );
    else
        return(
    <div>
        Loading ...
    </div>
    )
}