import { Injectable } from "@angular/core";
import { GlobalFunctionsService } from "../_services/gfinfo.service";
import { MatDialog } from "@angular/material/dialog";
import { DialogService } from "./dlg.service";
import { EscrowParticipant } from "app/modules/_modules/escrowclasses";
import { AddParticipantComponent } from "../admin/ad-eodetail/ad-eodetail-forms/add-participant.component";
import { APAddressComponent } from "../admin/ad-eodetail/ad-eodetail-forms/ap-address.component";
import { APEmailComponent } from "../admin/ad-eodetail/ad-eodetail-forms/ap-email.component";
import { ViewEditCustomerProfileComponent } from "../admin/ad-eodetail/ad-eodetail-forms/view-edit-customer-profile.component";
import { CPAddressComponent } from "../admin/ad-eodetail/ad-eodetail-forms/cp-address.component";
import { CPEmailComponent } from "../admin/ad-eodetail/ad-eodetail-forms/cp-email.component";
import { CustomerInfo } from "app/modules/_modules/customerclasses";
import { WireInformationComponent } from "../admin/ad-eodetail/ad-eodetail-forms/wire-information.component";
import { AddWireInformationComponent } from "../admin/ad-eodetail/ad-eodetail-forms/add-wire-information.component";
import { AddReceivedFundsComponent } from "../admin/ad-eodetail/ad-eodetail-forms/add-received-funds.component";
import { AddReleasedFundsComponent } from "../admin/ad-eodetail/ad-eodetail-forms/add-released-funds.component";

import { ADSearchCustomersComponent } from "../admin/ad-search/ad-search-forms/ad-search-customers.component";
import { ADSearchCustomerShowComponent } from "../admin/ad-search/ad-search-forms/ad-search-customer-show.component";

import { FundsComponent } from "../admin/ad-eodetail/ad-eodetail-forms/funds.component";
import { FundStatementsComponent } from "../admin/ad-eodetail/ad-eodetail-forms/fund-statements.component";
import { EditReceivedFundsComponent } from "../admin/ad-eodetail/ad-eodetail-forms/edit-received-funds.component";
import { EditReleasedFundsComponent } from "../admin/ad-eodetail/ad-eodetail-forms/edit-released-funds.component";
import { CreateClosingStatementComponent } from "../admin/ad-eodetail/ad-eodetail-forms/create-closing-statement.component";
import { CreateAccountingStatementComponent } from "../admin/ad-eodetail/ad-eodetail-forms/create-accounting-statement.component";
import { ADEODetailComponent } from "app/modules/admin/ad-eodetail/ad-eodetail.component";
import { CreateDemoOrderComponent } from "../admin/ad-eodetail/ad-eodetail-forms/create-demo-order.component";
import { CreateLinkedOrderComponent } from "../admin/ad-eodetail/ad-eodetail-forms/create-linked-order.component";
import { SearchAddToClosingComponent } from "../admin/ad-eodetail/ad-eodetail-forms/search-add-to-closing.component";
import { UpdateClosingDescriptionComponent } from "../admin/ad-eodetail/ad-eodetail-forms/update-closing-description.component";
import { AircraftInventoryItem } from "app/modules/_modules/aircraftclasses";
import { SendEmailEscrowDetailComponent } from "../admin/ad-eodetail/ad-eodetail-forms/send-email-escrow-detail.component";
import { TitleSearchComponent } from "../admin/ad-eodetail/ad-eodetail-forms/title-search.component";
import { TSARComponent } from "../admin/ad-eodetail/ad-eodetail-forms/tsar.component";
import { ViewLatestFXAgreementComponent } from "../admin/ad-eodetail/ad-eodetail-forms/view-latest-fxagreement.component";
import { LinkedOrdersComponent } from "../admin/ad-eodetail/ad-eodetail-forms/linked-orders.component";
import { NewDigitalSignatureComponent } from "../admin/ad-eodetail/ad-eodetail-forms/new-digital-signature.component";
import { EditItemsComponent } from "../admin/ad-eodetail/ad-eodetail-forms/edit-items.component";
import { SendFXAgreementComponent } from "../admin/ad-eodetail/ad-eodetail-forms/send-fx-agreement.component";
import { SendEmailComponent } from "../admin/ad-eodetail/ad-eodetail-forms/send-email.component";
import { RequestPhotoIDComponent } from "../admin/ad-eodetail/ad-eodetail-forms/request-photoid.component";
import { EditPoiComponent } from "../admin/ad-eodetail/ad-eodetail-forms/edit-poi.component";
import { CreatePoiPdfComponent } from "../admin/ad-eodetail/ad-eodetail-forms/create-poi-pdf.component";
import { CreateARAPdfComponent } from "../admin/ad-eodetail/ad-eodetail-forms/create-ara-pdf.component";
import { CreateBosPdfComponent } from "../admin/ad-eodetail/ad-eodetail-forms/create-bos-pdf.component";



@Injectable({
    providedIn: 'root'
})
export class DService {

    _gfs: GlobalFunctionsService = new GlobalFunctionsService();

    constructor(
        private _dialog: MatDialog,
        private _dlgService: DialogService,
    ) 
    { 
        this._gfs.showLog('DService', 'constructor', '', null);
        this._gfs.allowCall = false;
    }

    openAPAddress(pnlClass: string, dlgSizeW: string, dlgSizeH: string, eid: EscrowParticipant, dd: AddParticipantComponent): void {
          
        const dr = this._dialog.open(APAddressComponent, 
        { autoFocus: true, disableClose: true, panelClass: pnlClass,
          width: this._dlgService.dlgWidth(dlgSizeW) + '%', height: this._dlgService.dlgHeight(dlgSizeH) + '%'
        });
      
        dr.componentInstance.setData(eid);
    
        dr.afterClosed().subscribe(result => { dd.thecallback(); });
    
    }

    openAPEmail(pnlClass: string, dlgSizeW: string, dlgSizeH: string, eid: EscrowParticipant, dd: AddParticipantComponent): void {
          
        const dr = this._dialog.open(APEmailComponent, 
        { autoFocus: true, disableClose: true, panelClass: pnlClass,
          width: this._dlgService.dlgWidth(dlgSizeW) + '%', height: this._dlgService.dlgHeight(dlgSizeH) + '%'
        });
      
        dr.componentInstance.setData(eid);
    
        dr.afterClosed().subscribe(result => { dd.thecallback(); });
    
    }

    openCPAddress(pnlClass: string, dlgSizeW: string, dlgSizeH: string, eid: EscrowParticipant, dd: ViewEditCustomerProfileComponent): void {
          
        const dr = this._dialog.open(CPAddressComponent, 
        { autoFocus: true, disableClose: true, panelClass: pnlClass,
          width: this._dlgService.dlgWidth(dlgSizeW) + '%', height: this._dlgService.dlgHeight(dlgSizeH) + '%'
        });
      
        dr.componentInstance.setData(eid);
    
        dr.afterClosed().subscribe(result => { dd.thecallback(); });
    
    }
    
    openCPEmail(pnlClass: string, dlgSizeW: string, dlgSizeH: string, eid: EscrowParticipant, dd: ViewEditCustomerProfileComponent): void {
          
        const dr = this._dialog.open(CPEmailComponent, 
        { autoFocus: true, disableClose: true, panelClass: pnlClass,
          width: this._dlgService.dlgWidth(dlgSizeW) + '%', height: this._dlgService.dlgHeight(dlgSizeH) + '%'
        });
      
        dr.componentInstance.setData(eid);
    
        dr.afterClosed().subscribe(result => { dd.thecallback(); });
    
    }
    
    openADSearchCustomer(pnlClass: string, dlgSizeW: string, dlgSizeH: string, eid: CustomerInfo, dd: ADSearchCustomersComponent): void {
          
          const dr = this._dialog.open(ADSearchCustomerShowComponent, 
            { autoFocus: true, disableClose: true, panelClass: pnlClass,
              width: this._dlgService.dlgWidth(dlgSizeW) + '%', height: this._dlgService.dlgHeight(dlgSizeH) + '%'
            });
      
          dr.componentInstance.setData(eid);
    
          dr.afterClosed().subscribe(result => { dd.thecallback(); });
          
    }

    openAddWireInfo(pnlClass: string, dlgSizeW: string, dlgSizeH: string, eid: number, dd: WireInformationComponent): void {
        
        const dr = this._dialog.open(AddWireInformationComponent, 
          { autoFocus: true, disableClose: true, panelClass: pnlClass,
            width: this._dlgService.dlgWidth(dlgSizeW) + '%', height: this._dlgService.dlgHeight(dlgSizeH) + '%' 
          });
    
        dr.componentInstance.setData(eid);
        
        dr.afterClosed().subscribe(result => { dd.thecallback(); });

    } 

    openAddReceivedFunds_CCS(pnlClass: string, dlgSizeW: string, dlgSizeH: string, eid: number, dd: AddReceivedFundsComponent): void {
          
        const dr = this._dialog.open(AddReceivedFundsComponent, 
          { autoFocus: true, disableClose: true, panelClass: pnlClass,
            width: this._dlgService.dlgWidth(dlgSizeW) + '%', height: this._dlgService.dlgHeight(dlgSizeH) + '%' 
          });
      
          dr.componentInstance.setData(eid);
  
          dr.afterClosed().subscribe(result => { dd.thecallback(); });              
      
    }
  
    openAddReleasedFunds_CCS(pnlClass: string, dlgSizeW: string, dlgSizeH: string, eid: number, dd: AddReleasedFundsComponent): void {
          
        const dr = this._dialog.open(AddReleasedFundsComponent, 
          { autoFocus: true, disableClose: true, panelClass: pnlClass,
            width: this._dlgService.dlgWidth(dlgSizeW) + '%', height: this._dlgService.dlgHeight(dlgSizeH) + '%' 
          });
    
        dr.componentInstance.setData(eid);
  
        dr.afterClosed().subscribe(result => { dd.thecallback(); });            
    
    }

    openCAStatements(pnlClass: string, dlgSizeW: string, dlgSizeH: string, eid: number, dd: FundsComponent): void {
          
        const dr = this._dialog.open(FundStatementsComponent, 
          { autoFocus: true, disableClose: true, panelClass: pnlClass,
            width: this._dlgService.dlgWidth(dlgSizeW) + '%', height: this._dlgService.dlgHeight(dlgSizeH) + '%' 
          });
      
        dr.componentInstance.setData(eid);
  
        dr.afterClosed().subscribe(result => { dd.thecallback(); });             
      
    }

    openEditReceivedFunds(pnlClass: string, dlgSizeW: string, dlgSizeH: string, fundID: number, eid: number, dd: FundsComponent): void {
          
        const dr = this._dialog.open(EditReceivedFundsComponent, 
          { autoFocus: true, disableClose: true, panelClass: pnlClass,
            width: this._dlgService.dlgWidth(dlgSizeW) + '%', height: this._dlgService.dlgHeight(dlgSizeH) + '%' 
          });    
    
        dr.componentInstance.setData(eid, fundID);
  
        dr.afterClosed().subscribe(result => { dd.thecallback(); });         
    
    }
    
    openEditReleasedFunds(pnlClass: string, dlgSizeW: string, dlgSizeH: string, fundID: number, eid: number, dd: FundsComponent): void {
          
        const dr = this._dialog.open(EditReleasedFundsComponent, 
          { autoFocus: true, disableClose: true, panelClass: pnlClass,
            width: this._dlgService.dlgWidth(dlgSizeW) + '%', height: this._dlgService.dlgHeight(dlgSizeH) + '%' 
          });
    
        dr.componentInstance.setData(eid, fundID);
  
        dr.afterClosed().subscribe(result => { dd.thecallback(); });          
        
    }

    openAddClosingStatement(pnlClass: string, dlgSizeW: string, dlgSizeH: string, eid: number, dd: FundStatementsComponent): void {
          
        const dr = this._dialog.open(CreateClosingStatementComponent, 
          { autoFocus: true, disableClose: true, panelClass: pnlClass,
            width: this._dlgService.dlgWidth(dlgSizeW) + '%', height: this._dlgService.dlgHeight(dlgSizeH) + '%' 
          });
    
        dr.componentInstance.setData(eid);
  
        dr.afterClosed().subscribe(result => { dd.thecallback(); });
          
    }
    
    openAddAccountingStatement(pnlClass: string, dlgSizeW: string, dlgSizeH: string, eid: number, dd: FundStatementsComponent): void {
          
        const dr = this._dialog.open(CreateAccountingStatementComponent, 
          { autoFocus: true, disableClose: true, panelClass: pnlClass,
            width: this._dlgService.dlgWidth(dlgSizeW) + '%', height: this._dlgService.dlgHeight(dlgSizeH) + '%' 
          });
    
        dr.componentInstance.setData(eid);
  
        dr.afterClosed().subscribe(result => { dd.thecallback(); });          
    
    }
  
    openAddReceivedFunds(pnlClass: string, dlgSizeW: string, dlgSizeH: string, eid: number, dd: FundsComponent): void {
          
        const dr = this._dialog.open(AddReceivedFundsComponent, 
          { autoFocus: true, disableClose: true, panelClass: pnlClass,
            width: this._dlgService.dlgWidth(dlgSizeW) + '%', height: this._dlgService.dlgHeight(dlgSizeH) + '%' 
          });
      
          dr.componentInstance.setData(eid);
  
          dr.afterClosed().subscribe(result => { dd.thecallback(); });
              
      
    } 
      
      
    openAddReleasedFunds(pnlClass: string, dlgSizeW: string, dlgSizeH: string, eid: number, dd: FundsComponent): void {
          
          const dr = this._dialog.open(AddReleasedFundsComponent, 
            { autoFocus: true, disableClose: true, panelClass: pnlClass,
              width: this._dlgService.dlgWidth(dlgSizeW) + '%', height: this._dlgService.dlgHeight(dlgSizeH) + '%' 
            });
      
          dr.componentInstance.setData(eid);
  
          dr.afterClosed().subscribe(result => { dd.thecallback(); });
              
      
    }

    //==================================================================================================================

    openCreateDemoOrder(pnlClass: string, dlgSizeW: string, dlgSizeH: string, eid: number, dd: ADEODetailComponent): void {
        
        const dr = this._dialog.open(CreateDemoOrderComponent, 
          { autoFocus: true, disableClose: true, panelClass: pnlClass,
            width: this._dlgService.dlgWidth(dlgSizeW) + '%', height: this._dlgService.dlgHeight(dlgSizeH) + '%'
          });
    
        dr.componentInstance.setData(eid);

        dr.afterClosed().subscribe(result => { dd.thecallback(); });       
        
    }

    openCreateLinkedOrder(pnlClass: string, dlgSizeW: string, dlgSizeH: string, eid: number, dd: ADEODetailComponent): void {
        
        const dr = this._dialog.open(CreateLinkedOrderComponent, 
          { autoFocus: true, disableClose: true, panelClass: pnlClass,
            width: this._dlgService.dlgWidth(dlgSizeW) + '%', height: this._dlgService.dlgHeight(dlgSizeH) + '%' 
          });
    
        dr.componentInstance.setData(eid);

        dr.afterClosed().subscribe(result => { dd.thecallback(); });
        
    }
    
    openSearchAddToClosing(pnlClass: string, dlgSizeW: string, dlgSizeH: string, eid: number, dd: ADEODetailComponent): void {
        
        const dr = this._dialog.open(SearchAddToClosingComponent, 
          { autoFocus: true, disableClose: true, panelClass: pnlClass,
            width: this._dlgService.dlgWidth(dlgSizeW) + '%', height: this._dlgService.dlgHeight(dlgSizeH) + '%' 
          });
    
        dr.componentInstance.setData(eid);
        
        dr.afterClosed().subscribe(result => { dd.thecallback(); });
        
    }

    openUpdateClosingDescription(pnlClass: string, dlgSizeW: string, dlgSizeH: string, eid: number, dd: ADEODetailComponent): void {
        
        const dr = this._dialog.open(UpdateClosingDescriptionComponent, 
          { autoFocus: true, disableClose: true, panelClass: pnlClass,
            width: this._dlgService.dlgWidth(dlgSizeW) + '%', height: this._dlgService.dlgHeight(dlgSizeH) + '%' 
          });
    
        dr.componentInstance.setData(eid);
        
        dr.afterClosed().subscribe(result => { dd.thecallback(); });
    }

    openSendEmailEscrowDetail(pnlClass: string, dlgSizeW: string, dlgSizeH: string, eid: number, pids: EscrowParticipant[], dd: ADEODetailComponent): void {
        
        const dr = this._dialog.open(SendEmailEscrowDetailComponent, 
          { autoFocus: true, disableClose: true, panelClass: pnlClass,
            width: this._dlgService.dlgWidth(dlgSizeW) + '%', height: this._dlgService.dlgHeight(dlgSizeH) + '%' 
          });
    
        dr.componentInstance.setData(eid, pids);

        dr.afterClosed().subscribe(result => { dd.thecallback(); });
    }
  
    openTitleSearch(pnlClass: string, dlgSizeW: string, dlgSizeH: string, eid: number, pids: EscrowParticipant[], 
        iitems: AircraftInventoryItem[], tsoid: number, dd: ADEODetailComponent): void {
            
        const dr = this._dialog.open(TitleSearchComponent, 
          { autoFocus: true, disableClose: true, panelClass: pnlClass,
            width: this._dlgService.dlgWidth(dlgSizeW) + '%', height: this._dlgService.dlgHeight(dlgSizeH) + '%' 
          });
    
        dr.componentInstance.setData(eid, pids, iitems, tsoid);

        dr.afterClosed().subscribe(result => { dd.thecallback(); });
                
    }
  
    openTSAR(pnlClass: string, dlgSizeW: string, dlgSizeH: string, eid: number, pids: EscrowParticipant[], tsoid: number, dd: ADEODetailComponent): void {
        
        const dr = this._dialog.open(TSARComponent, 
          { autoFocus: true, disableClose: true, panelClass: pnlClass,
            width: this._dlgService.dlgWidth(dlgSizeW) + '%', height: this._dlgService.dlgHeight(dlgSizeH) + '%' 
          });
    
        dr.componentInstance.setData(eid, pids, tsoid);
        
        dr.afterClosed().subscribe(result => { dd.thecallback(); });
        
    }
  
    openViewLatestFXAgreement(pnlClass: string, dlgSizeW: string, dlgSizeH: string, dd: ADEODetailComponent): void {
        
        const dr = this._dialog.open(ViewLatestFXAgreementComponent, 
          { autoFocus: true, disableClose: true, panelClass: pnlClass,
            width: this._dlgService.dlgWidth(dlgSizeW) + '%', height: this._dlgService.dlgHeight(dlgSizeH) + '%' 
          });
    
        dr.componentInstance.setData(6); 
        
        dr.afterClosed().subscribe(result => { dd.thecallback(); });
        
    }

    openAddParticipant(pnlClass: string, dlgSizeW: string, dlgSizeH: string, eid: number, dd: ADEODetailComponent): void {
        
        const dr = this._dialog.open(AddParticipantComponent, 
          { autoFocus: true, disableClose: true, panelClass: pnlClass,
            width: this._dlgService.dlgWidth(dlgSizeW) + '%', height: this._dlgService.dlgHeight(dlgSizeH) + '%' 
          });
    
        dr.componentInstance.setData(eid);
        
        dr.afterClosed().subscribe(result => { dd.thecallback(); });
        
    }  
      
    openWireInformation(pnlClass: string, dlgSizeW: string, dlgSizeH: string, eid: number, dd: ADEODetailComponent): void {
        
        const dr = this._dialog.open(WireInformationComponent, 
          { autoFocus: true, disableClose: true, panelClass: pnlClass,
            width: this._dlgService.dlgWidth(dlgSizeW) + '%', height: this._dlgService.dlgHeight(dlgSizeH) + '%' 
          });
    
        dr.componentInstance.setData(eid);  
        
        dr.afterClosed().subscribe(result => { dd.thecallback(); });
        
    }

    openFunds(pnlClass: string, dlgSizeW: string, dlgSizeH: string, eid: number, dd: ADEODetailComponent): void {
        
      const dr = this._dialog.open(FundsComponent, 
        { autoFocus: true, disableClose: true, panelClass: pnlClass,
            width: this._dlgService.dlgWidth(dlgSizeW) + '%', height: this._dlgService.dlgHeight(dlgSizeH) + '%' 
        });
  
      dr.componentInstance.setData(eid);

      dr.afterClosed().subscribe(result => { dd.thecallback(); });
        
    }

    openLinkedOrders(pnlClass: string, dlgSizeW: string, dlgSizeH: string, eid: number, dd: ADEODetailComponent): void {
        
        const dr = this._dialog.open(LinkedOrdersComponent, 
          { autoFocus: true, disableClose: true, panelClass: pnlClass,
            width: this._dlgService.dlgWidth(dlgSizeW) + '%', height: this._dlgService.dlgHeight(dlgSizeH) + '%' 
          });
    
        dr.componentInstance.setData(eid);
  
        dr.afterClosed().subscribe(result => { dd.thecallback(); });
          
      }
  
      openNewDigitalSignature(pnlClass: string, dlgSizeW: string, dlgSizeH: string, eid: number, dd: ADEODetailComponent): void {
        
        const dr = this._dialog.open(NewDigitalSignatureComponent, 
          { autoFocus: true, disableClose: true, panelClass: pnlClass,
            width: this._dlgService.dlgWidth(dlgSizeW) + '%', height: this._dlgService.dlgHeight(dlgSizeH) + '%' 
          });
    
        dr.componentInstance.setData(eid);
  
        dr.afterClosed().subscribe(result => { dd.thecallback(); });
          
      }

      openViewEditCustomerProfile(pnlClass: string, dlgSizeW: string, dlgSizeH: string, eid: number, custID: number, partID: number, dd: ADEODetailComponent): void {
        
        const dr = this._dialog.open(ViewEditCustomerProfileComponent, 
          { autoFocus: true, disableClose: true, panelClass: pnlClass,
            width: this._dlgService.dlgWidth(dlgSizeW) + '%', height: this._dlgService.dlgHeight(dlgSizeH) + '%' 
          });
      
        dr.componentInstance.setData(custID, eid, partID);
  
        dr.afterClosed().subscribe(result => { dd.thecallback(); });
             
      
      }
  
      openCreateBOSPDF(pnlClass: string, dlgSizeW: string, dlgSizeH: string, eid: number, dd: ADEODetailComponent): void {
          
        const dr = this._dialog.open(CreateBosPdfComponent, 
          { autoFocus: true, disableClose: true, panelClass: pnlClass,
            width: this._dlgService.dlgWidth(dlgSizeW) + '%', height: this._dlgService.dlgHeight(dlgSizeH) + '%' 
          });
      
        dr.componentInstance.setData(eid);
  
        dr.afterClosed().subscribe(result => { dd.thecallback(); });
             
      
      }
  
      openCreateARAPDF(pnlClass: string, dlgSizeW: string, dlgSizeH: string, eid: number, dd: ADEODetailComponent): void {
          
        const dr = this._dialog.open(CreateARAPdfComponent, 
          { autoFocus: true, disableClose: true, panelClass: pnlClass,
            width: this._dlgService.dlgWidth(dlgSizeW) + '%', height: this._dlgService.dlgHeight(dlgSizeH) + '%' 
          });
      
        dr.componentInstance.setData(eid);
  
        dr.afterClosed().subscribe(result => { dd.thecallback(); });
             
      
      }
  
      openCreatePOIPDF(pnlClass: string, dlgSizeW: string, dlgSizeH: string, eid: number, dd: ADEODetailComponent): void {
          
        const dr = this._dialog.open(CreatePoiPdfComponent, 
          { autoFocus: true, disableClose: true, panelClass: pnlClass,
            width: this._dlgService.dlgWidth(dlgSizeW) + '%', height: this._dlgService.dlgHeight(dlgSizeH) + '%' 
          });
      
        dr.componentInstance.setData(eid);
  
        dr.afterClosed().subscribe(result => { dd.thecallback(); });
             
      
      }
  
      openEditPOI(pnlClass: string, dlgSizeW: string, dlgSizeH: string, eid: number, dd: ADEODetailComponent): void {
          
        const dr = this._dialog.open(EditPoiComponent, 
          { autoFocus: true, disableClose: true, panelClass: pnlClass,
            width: this._dlgService.dlgWidth(dlgSizeW) + '%', height: this._dlgService.dlgHeight(dlgSizeH) + '%' 
          });
      
        dr.componentInstance.setData(eid);
  
        dr.afterClosed().subscribe(result => { dd.thecallback(); });
             
      
      }
  
      openRequestPhotoID(pnlClass: string, dlgSizeW: string, dlgSizeH: string, eid: number, dd: ADEODetailComponent): void {
          
        const dr = this._dialog.open(RequestPhotoIDComponent, 
          { autoFocus: true, disableClose: true, panelClass: pnlClass,
            width: this._dlgService.dlgWidth(dlgSizeW) + '%', height: this._dlgService.dlgHeight(dlgSizeH) + '%' 
          });
      
        dr.componentInstance.setData(eid);
  
        dr.afterClosed().subscribe(result => { dd.thecallback(); });
             
      
      }
  
      openSendEmail(pnlClass: string, dlgSizeW: string, dlgSizeH: string, eid: number, dd: ADEODetailComponent): void {
          
        const dr = this._dialog.open(SendEmailComponent, 
          { autoFocus: true, disableClose: true, panelClass: pnlClass,
            width: this._dlgService.dlgWidth(dlgSizeW) + '%', height: this._dlgService.dlgHeight(dlgSizeH) + '%' 
          });
      
        dr.componentInstance.setData(eid);
  
        dr.afterClosed().subscribe(result => { dd.thecallback(); });
             
      
      }
  
      openSendFXAgreement(pnlClass: string, dlgSizeW: string, dlgSizeH: string, eid: number, dd: ADEODetailComponent): void {
          
        const dr = this._dialog.open(SendFXAgreementComponent, 
          { autoFocus: true, disableClose: true, panelClass: pnlClass,
            width: this._dlgService.dlgWidth(dlgSizeW) + '%', height: this._dlgService.dlgHeight(dlgSizeH) + '%'
          });
      
        dr.componentInstance.setData(eid);
  
        dr.afterClosed().subscribe(result => { dd.thecallback(); });
             
      
      }
  
      openEditItems(pnlClass: string, dlgSizeW: string, dlgSizeH: string, eid: number, dd: ADEODetailComponent): void {
          
        const dr = this._dialog.open(EditItemsComponent, 
          { autoFocus: true, disableClose: true, panelClass: pnlClass,
            width: this._dlgService.dlgWidth(dlgSizeW) + '%', height: this._dlgService.dlgHeight(dlgSizeH) + '%' 
          });
      
        dr.componentInstance.setData(eid);
  
        dr.afterClosed().subscribe(result => { dd.thecallback(); });
             
      
      }

}