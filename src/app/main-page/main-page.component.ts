import {Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {Subscription} from 'rxjs';
import {AuthenticationService} from '../authentication/authentication.service';
import {PlaceholderDirective} from '../shared/directive/placeholder.directive';
import {LoginComponent} from '../authentication/login/login.component';
import {RegisterComponent} from '../authentication/register/register.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit, OnDestroy {


  @ViewChild(PlaceholderDirective) placeholderDirective: PlaceholderDirective;

  private registerOpenSubscription: Subscription;
  private registerCloseSubscription: Subscription;
  private loginOpenSubscription: Subscription;
  private loginCloseSubscription: Subscription;

  private viewContainerRef: ViewContainerRef;

  constructor(private authenticationService: AuthenticationService,
              private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit(): void {
    this.loginOpenSubscription = this.authenticationService.loginModalOpenEvent.subscribe(__ => {
      this.loadLoginForm();
    });
    this.loginCloseSubscription = this.authenticationService.loginModalCloseEvent.subscribe(__ => {
      this.viewContainerRef.clear();
    });
    this.registerOpenSubscription = this.authenticationService.registerModalOpenEvent.subscribe(__ => {
      this.loadRegisterForm();
    });
    this.registerCloseSubscription = this.authenticationService.registerModalCloseEvent.subscribe(__ => {
      this.viewContainerRef.clear();
    });
  }

  ngOnDestroy(): void {
    this.registerCloseSubscription.unsubscribe();
    this.registerOpenSubscription.unsubscribe();
    this.loginCloseSubscription.unsubscribe();
    this.loginOpenSubscription.unsubscribe();
  }

  private loadLoginForm(): void {
    const loginCreateComponent = this.componentFactoryResolver.resolveComponentFactory(LoginComponent);
    this.viewContainerRef = this.placeholderDirective.viewContainerRef;

    this.viewContainerRef.clear();
    this.viewContainerRef.createComponent(loginCreateComponent);
  }

  private loadRegisterForm(): void {
    const registerCreateComponent = this.componentFactoryResolver.resolveComponentFactory(RegisterComponent);
    this.viewContainerRef = this.placeholderDirective.viewContainerRef;

    this.viewContainerRef.clear();
    this.viewContainerRef.createComponent(registerCreateComponent);
  }

}
