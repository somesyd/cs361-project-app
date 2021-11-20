
var general_sentiment =  {
    graph_type: "scatter",
    colors: "RdBu",
    xaxis: "polarity",
    yaxis: "subjectivity",
    xlabel: "Polarity: Negative to Positive",
    ylabel: "Emotional Intensity",
    title: "Dream Sentiment"
}

var doc_graphs = {
    doc_polarity: {
        graph_type: "pie",
        colors: "Greys",
        xaxis: "polarity",
        yaxis: "proportion",
        xlabel: "",
        ylabel: "",
        title: "Polarity: Positive to Negative"
    },
    doc_emotion: {
        graph_type: "pie",
        colors: "Purples",
        xaxis: "subjectivity",
        yaxis: "proportion",
        xlabel: "",
        ylabel: "",
        title: "Emotion"
    }
} 

var shadow =  {
    graph_type: "scatter",
    colors: "gray",
    xaxis: "polarity",
    yaxis: "subjectivity",
    xlabel: "Polarity: Negative to Positive",
    ylabel: "Emotional Intensity",
    title: "Shadow Sentiment"
}

module.exports = {
    general_sentiment,
    doc_graphs,
    shadow_graph: shadow
}