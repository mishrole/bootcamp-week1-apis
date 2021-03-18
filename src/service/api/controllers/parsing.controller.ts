import ProfileModel from 'datalayer/models/mongo/profile.model';
import { ProfileType, } from 'types/profile.types';

class PARSING {
  async storageDocument(document: ProfileType) {
    try {
      const newDocument = await ProfileModel.create(document);

      return newDocument;
    } catch (error) {
      throw error;
    }
  }
}

const ParsingController = new PARSING();

export default ParsingController;
