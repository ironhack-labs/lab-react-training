import { FcLike } from 'react-icons/fc';
import { Component } from 'react';
import { Stack, Button } from '@chakra-ui/react'

class LikeButton extends Component {
  state = {
    likes: 0,
  };

  increaseLike() {
    const copyState = this.state;
    copyState.likes ++;
    this.setState({
      copyState
    })
  }

  render() {
    return (
      <Stack direction="row" spacing={4}>
        <Button onClick={this.increaseLike.bind(this)} leftIcon={<FcLike />} color="black" border="1px" borderColor="gray.200" variant="solid">
          {this.state.likes}
        </Button>
      </Stack>
    );
  }
}

export default LikeButton;
