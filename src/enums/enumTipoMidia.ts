import baseEnum from "./baseEnum";

class EnumTipoMidia extends baseEnum<number> {
    protected enumData = {
	    'Imagem': 1,
	    'Video': 2,
	    'Audio': 3,
    };

    public readonly IMAGEM = 1;

    public readonly VIDEO = 2;

    public readonly AUDIO = 3;

    public readonly DEFAULT_IMAGE = 'https://sysdamappstorage.blob.core.windows.net/assets/default_geocode-2x.png';

    public readonly DEFAULT_IMAGE_VIDEO = 'https://sysdamappstorage.blob.core.windows.net/assets/default_geocode-2x.png';
}
const enumTipoMidia = new EnumTipoMidia();
export default enumTipoMidia;
