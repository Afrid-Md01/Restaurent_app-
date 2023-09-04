import classes from './MealsSummary.module.css'

export default function MealsSummary(){

    return(
        <section className={classes.summary}>
            <h2>Delicious meals will be delivered to you!</h2>
            <p>
                Choose your meal which are available in our restaurent, are really delicious.
            </p>
            <p>
                All meals are prepared with high quality ingredeints, and it will gives you a wonderful experience.
            </p>

        </section>
    )
}