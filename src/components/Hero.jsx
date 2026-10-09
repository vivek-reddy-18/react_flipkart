
function Hero() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Our Courses</h1>

      <div className="row">

        {/* Card 1 */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Python</h5>
              <p className="card-text">
                Learn Python programming from basics to advanced concepts.
              </p>
              <button className="btn btn-primary">Learn More</button>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Java</h5>
              <p className="card-text">
                Learn Java programming and object-oriented programming.
              </p>
              <button className="btn btn-primary">Learn More</button>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">React</h5>
              <p className="card-text">
                Build modern and interactive websites using React.
              </p>
              <button className="btn btn-primary">Learn More</button>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">SQL</h5>
              <p className="card-text">
                Learn databases, queries, joins, and data management.
              </p>
              <button className="btn btn-primary">Learn More</button>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">HTML & CSS</h5>
              <p className="card-text">
                Learn how to create and style beautiful web pages.
              </p>
              <button className="btn btn-primary">Learn More</button>
            </div>
          </div>
        </div>

        {/* Card 6 */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Data Science</h5>
              <p className="card-text">
                Analyze data and create useful insights using Python.
              </p>
              <button className="btn btn-primary">Learn More</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Hero
