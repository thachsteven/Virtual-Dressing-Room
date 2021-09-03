import { CHOOSE_CLOTHES } from '../types/types';

const initialState = {
  topclothes: './images/allbody/bikini_bra.png',
  botclothes: './images/allbody/bikini_pants.png',
  shoes: './images/shoes/shoes4.png',
  handbags: '',
  necklaces: '',
  hairstyle: '',
  background: '',
};

const ModelRenderer = (state = initialState, action) => {
  switch (action.type) {
    case CHOOSE_CLOTHES: {
      state[action.clothes.type] = action.clothes.imgSrc_png;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default ModelRenderer;
