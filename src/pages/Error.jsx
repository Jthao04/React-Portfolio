import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page" className="error-container text-center text-white">
            <h1>Error</h1>
            <p>An unexpected error has occurred</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <img
                className="img-thumbnail error-image"
                src="/assets/robot.png"
                alt="Picture of a robot"
            />
        </div>
    );
}