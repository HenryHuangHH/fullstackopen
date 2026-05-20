import StatisticLine from "../StatisticLine"
const Statistics = ({good, neutral, bad, reviewCount, average, positive}) =>{
    
    if(reviewCount !== 0){
        return(
        <>
        <StatisticLine text ="good" value ={good}></StatisticLine>
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={reviewCount} />
        <StatisticLine text="average" value={average} />
        <StatisticLine text="positive" value={positive + " %"} />
        </>
        )
    }
    return(
        <p>no feedback given</p>
    )

    
}

export default Statistics 