import { React } from 'react';
import styles from './Error.module.css'

function Error() {
    return (
        <>
        <div className={styles.errorMessageMain}>
            <h1>Sorry page not found</h1>
        </div>
        </>
    );
}

export default Error;