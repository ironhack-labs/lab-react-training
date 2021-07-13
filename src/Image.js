import { Component } from 'react';

const imagesPath = {
  badger:
    'http://africageographic.com/wp-content/uploads/2014/09/Baby-honey-badger-at-Linyanti-1-18.jpg',
  boss:
    'https://external-preview.redd.it/WiVnRJWSZuvsbjwbADwDFPe2UAb5K4JjF6LDdxPnPB0.jpg?auto=webp&s=ce3ec76d5f8bdab82dbb53298c9a112295a6c285',
};

class Image extends Component {
  state = {
    open: true,
  };
  toggleImage = () => {
    this.setState((state) => ({ open: !state.open }));
  };

  getImageName = () => (this.state.open ? 'badger' : 'boss');

  render() {
    const imageName = this.getImageName();
    return (
      <div>
        <img
          style={{ maxWidth: '500px' }}
          src={imagesPath[imageName]}
          onClick={this.toggleImage}
        />
      </div>
    );
  }
}

export default Image;
