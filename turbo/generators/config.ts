import type { PlopTypes } from '@turbo/gen';

const addFiles = ['package.json', 'tsconfig.json', 'index.ts'];

const actions: PlopTypes.ActionType[] = addFiles.map((file) => ({
  type: 'add',
  path: `packages/{{ name }}/${file}`,
  templateFile: `templates/${file}.hbs`,
}));

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator('packages', {
    description: 'Generate a new package for the monorepo',
    prompts: [
      {
        name: 'name',
        type: 'input',
        message: 'What is the name of the package?',
      },
    ],
    actions: [...actions],
  });
}
