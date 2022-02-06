//Updating several independant variables
//State object as seen below
constructor(props) {
    super(props);
    this.state = {
      posts: [],
      comments: []
    };
  }
//independant update
componentDidMount() {
    fetchPosts().then(response => {
      this.setState({
        posts: response.posts
      });
    });

    fetchComments().then(response => {
      this.setState({
        comments: response.comments
      });
    });
  }
