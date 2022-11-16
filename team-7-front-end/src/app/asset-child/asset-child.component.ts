import { Component, Input, OnInit } from '@angular/core';
import { Asset } from '../model/asset';
import { AssetService } from '../service/asset.service';

@Component({
  selector: 'app-asset-child',
  templateUrl: './asset-child.component.html',
  styleUrls: ['./asset-child.component.css']
})
export class AssetChildComponent implements OnInit {
  @Input() assetChild!: Asset[]
  constructor(private assetService: AssetService) { }
  deleteAsset(id: number): void {
    let index = this.assetChild.findIndex(d => d.id === id)
    this.assetService.deleteAsset(id).subscribe(a => this.assetChild.splice(index, 1))
  }
  ngOnInit(): void {
  }

}
