import { StrategieService } from '@services/strategie.service';

describe('Strategie service', () => {
  test("retourne l'id de l'exercice suivant", async () => {
    const listeExo = StrategieService.listeExo;

    const nextid = await StrategieService.getIdNextSimpleById(listeExo[0]);

    expect(nextid).toBe(listeExo[1]);
    expect(typeof nextid).toBe('string');
  });

  test('retourne null si on est dernier exercice', async () => {
    const listeExo = StrategieService.listeExo;

    const nextid = await StrategieService.getIdNextSimpleById(listeExo.at(-1)!);

    expect(nextid).toBe(null);
  });

  test("retourne le premier id si l'id donné est init", async () => {
    const listeExo = StrategieService.listeExo;

    const nextid = await StrategieService.getIdNextSimpleById('init');

    expect(nextid).toBe(listeExo[0]);
    expect(typeof nextid).toBe('string');
  });
});
