import baseEnum from './baseEnum';

class EnumVideoType extends baseEnum<number> {
    protected enumData = {
        'TODOS OS CURSOS': 1,
        'EVENTOS': 2,
        'CONTEÚDOS': 3,
        'NOVIDADES DA PLATAFORMA': 4,
    };

    public readonly TODOS_OS_CURSOS = 1;

    public readonly EVENTOS = 2;

    public readonly CONTUDOS = 3;

    public readonly NOVIDADES_DA_PLATAFORMA = 4;

    public getVideoType(idVideoType?: number) {
        switch (idVideoType) {
        case 1:
            return 'TODOS OS CURSOS';
        case 2:
            return 'EVENTOS';
        case 3:
            return 'CONTEÚDOS';
        case 4:
            return 'NOVIDADES DA PLATAFORMA';
        default:
            return 'TODOS OS CURSOS';
        }
    }
}

const enumVideoType = new EnumVideoType();
export default enumVideoType;
