import { Component, OnInit } from '@angular/core';
import { VscodeService } from '@pivotal-tools/vscode-extension-webview-angular';

@Component({
  selector: 'app-vscode',
  templateUrl: './vscode.component.html',
  styleUrls: ['./vscode.component.css']
})
export class VscodeComponent implements OnInit {

  private sdsl = '';
  private cdsl = '';

  constructor(
    private vscodeService: VscodeService
  ) {
  }

  ngOnInit(): void {
    this.vscodeService.getEvents().subscribe(event => {
      this.sdsl = JSON.stringify(event.data);
    });
  }

  onKey(event: any) {
    this.vscodeService.postMessage({dsl: event.target.value});
  }

  get clientDsl(): string {
    return this.cdsl;
  }

  get serverDsl(): string {
    return this.sdsl;
  }
}
