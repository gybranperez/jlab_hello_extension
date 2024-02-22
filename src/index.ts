import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { ISettingRegistry } from '@jupyterlab/settingregistry';

/**
 * Initialization data for the jlab_hello_extension extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jlab_hello_extension:plugin',
  description: 'A demo for JupyterLab 4 extension implementing translation to other languages.',
  autoStart: true,
  optional: [ISettingRegistry],
  activate: (app: JupyterFrontEnd, settingRegistry: ISettingRegistry | null) => {
    console.log('JupyterLab extension jlab_hello_extension is activated!');

    if (settingRegistry) {
      settingRegistry
        .load(plugin.id)
        .then(settings => {
          console.log('jlab_hello_extension settings loaded:', settings.composite);
        })
        .catch(reason => {
          console.error('Failed to load settings for jlab_hello_extension.', reason);
        });
    }
  }
};

export default plugin;
