import { Injectable } from "@nestjs/common";
import { Gitlab } from "@gitbeaker/rest";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class GitlabService {
  api: InstanceType<typeof Gitlab>;
  constructor(
    config: ConfigService,
  ) {
    this.api = new Gitlab({
      host: config.get('GITLAB_HOST') ?? 'https://gitlab.com',
      token: config.getOrThrow('GITLAB_TOKEN'),
    });
  }

  getInstance() {
    return this.api;
  }

}
