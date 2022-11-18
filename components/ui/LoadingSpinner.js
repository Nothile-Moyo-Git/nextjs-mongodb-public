/**
 * Loading spinner component
 * Used to show information before a hydration is complete, or a page loads
 */

const LoadingSpinner = () => {
    return(
        <div className="spinner">
            <div className="spinner__heart">
                <span></span>
            </div>
            <p className="spinner__text">Loading</p>
        </div>
    );
};

export default LoadingSpinner;