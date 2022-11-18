/**
 * 
 * Card component, acts as a wrapper for the meetup cards and the forms
 * 
 * @param className : string
 * @param showCard : string
 * 
 */

import {} from "react";
import styles from "./OptimizedCard.module.scss";

const Card = (props) => {

    return(
        <div className={`${styles.gradientCard} ${props.className === "gradientForm" && styles.gradientForm} ${props.showCard === "fade-in" && styles.fadeIn}`}>
            <div className={styles.gradientWrapper}>
                <div className={styles.gradientBackground}/>
            </div>

            {props.children}
        </div>
    );
}

export default Card;