import React, { useState } from 'react'
import classes from './calculator.module.css'

const Calculator = () => {

    const [here, setHere] = useState('');

    return (
        <> 
            <div className={classes.calculator}>
                <h3>Enter your details below </h3>

                <div className={classes.fieldWrapper}>

                    <div className={classes.radioWrapper}>
                        <input type="radio" name="measure" id="metric" checked />
                        <label htmlFor="metric">Metric</label>
                    </div>

                    <div className={classes.radioWrapper}>
                        <input type="radio" name="measure" id="imperial" />
                        <label htmlFor="metric">Imperial</label>
                    </div>
                </div>

                <div className="result">
                    <h3>Welcome!</h3>

                    <p className="text-small">Enter your height and weight and you’ll see your BMI result here</p>
                </div>
            </div>
        </>
    )
}

export default Calculator