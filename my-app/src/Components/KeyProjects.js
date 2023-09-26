import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button, CardGroup} from 'reactstrap';

const KeyProjects = () => {
    return (
        <div class="keyProjects">
            <h1 class="title">Key Projects</h1>
            <CardGroup>
            <Card
                style={{
                    width: '21rem'
                }}
            >
                <img
                    alt="Sample"
                    src="covid-happiness-project.png"
                />
                <CardBody>
                    <CardTitle tag="h5">
                    Covid Happiness Analysis
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        Python, PySpark, Linux
                    </CardSubtitle>
                    <CardText>
                    Utilized Python and Spark (PySpark) on a Linux system to compare sentiment analysis scores of hundreds of thousands of Yelp restaurant reviews and cross referenced that data with Covid deaths over time
                    </CardText>
                    <Button href="https://github.com/julietnasar/covid_happiness">
                        See on GitHub
                    </Button>
                </CardBody>
            </Card>

            <Card
                style={{
                    width: '21rem'
                }}
            >
                <img
                    alt="Sample"
                    src="memory-allocator.png"
                />
                <CardBody>
                    <CardTitle tag="h5">
                    Memory Allocator
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        C
                    </CardSubtitle>
                    <CardText>
                    Implemented a memory allocator by storing virtual memory spaces in a doubly linked list and implementing functions to remove, add, and merge memory spaces when necessary
                    </CardText>
                    <Button href="https://github.com/julietnasar/Memory_Allocator">
                        See on GitHub
                    </Button>
                </CardBody>
            </Card>
            <Card
                style={{
                    width: '21rem'
                }}
            >
                <img
                    alt="Sample"
                    src="cmc-analysis.png"
                />
                <CardBody>
                    <CardTitle tag="h5">
                    Contraceptive Method Choice Analysis
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        R, Predictive Modeling
                    </CardSubtitle>
                    <CardText>
                    Tested several predictive models for predicting contraceptive method choice based on a variety of variables, the optimal model being Random Forest with a 27.7% misclassification rate
                    </CardText>
                    <Button href="https://github.com/julietnasar/cmc-analysis">
                        See on GitHub
                    </Button>
                </CardBody>
            </Card>
            </CardGroup>
        </div>
    )
}


export default KeyProjects;
